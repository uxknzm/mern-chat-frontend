import { Tab, Tabs } from '@mui/material';
import { formatDistance, format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';

import { aboutMe } from '../../redux/slices/profileSlice';
import AboutProfile from './AboutProfile/AboutProfile';
import Friends from './Friends/Friends';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Posts from './Posts/Posts';

const getDateLastSeen = (date: any) => {
    const dateFormat = format(new Date(date), 'dd MMMM yyyy');
    const distance = formatDistance(new Date(date), new Date(), { addSuffix: true });
    return {
        dateFormat,
        distance
    };
};

const Profile = ({ fullname, email, last_seen }: any) => {
    // const { fullname, id, email, last_seen }: any = useSelector(aboutMe);
    
    const [value, setValue] = React.useState(0);
    const lastSeen = getDateLastSeen(last_seen);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <div className="p-4 w-full overflow-auto">
            <AboutProfile fullname={fullname} />
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <PersonalInfo fullname={fullname} email={email} lastSeen={lastSeen} />
                <div className="bg-white w-full rounded-lg shadow-xl p-8">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Friends" />
                        <Tab label="Posts" />
                        <Tab label="Photo" />
                    </Tabs>
                    <Friends value={value} index={0} />
                    <Posts value={value} index={1} fullname={fullname} /> 
                </div>
                {/* <Friends /> */}
            </div>
        </div>
    );
};

export default Profile;