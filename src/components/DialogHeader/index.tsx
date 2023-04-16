import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrentDialog } from '../../redux/slices/dialogsSlice';
import { differenceInHours, format, formatDistance, isToday } from 'date-fns';
import PartherInfo from './PartherInfo/PartherInfo';
import InteractionWithDialog from './InteractionWithDialog/InteractionWithDialog';
import { aboutMe } from '../../redux/slices/profileSlice';

export const getDateLastSeen = (date: any) => {    
    const dateFormat = format(new Date(date), 'd MMMM');
    const timeFormat = format(new Date(date), 'HH:mm');
    const distance = formatDistance(new Date(date), new Date(), { includeSeconds: true, addSuffix: true });
    if (isToday(new Date(date))) {
        const howManyHours = differenceInHours(new Date(), new Date(date));
        if (howManyHours >= 5) {            
           return `last seen today at ${timeFormat} am`
        };
        return `last seen ${distance}`
    };
    // `last seen today at 8:25 am`  /* кейс когда писать что заходил сегодня но позже 5 часов назад */
    // `last seen three hours ago`  /* кейс когда писать что заходил сегодня но меньше 5 часов назад */
    return `last seen ${dateFormat} at ${timeFormat} am`;  /* кейс когда писать что заходил не сегодня */
};

const DialogHeader = () => {
    const currentDialog = useSelector(getCurrentDialog);
    const { id }: any = useSelector(aboutMe);
    if (!currentDialog) {
        return null;
    };

    let { partner, author }: any = currentDialog;

    partner = partner.id !== id ? partner : author;

    const last_seen = partner.isOnline ? "Online" : getDateLastSeen(partner.last_seen);
    

    return (
        <div className="h-16 border flex justify-between items-center w-full px-5 py-2 shadow-sm hover:bg-gray-100">
            <PartherInfo _id={partner._id} avatar={partner.avatar} fullname={partner.fullname} last_seen={last_seen} />
            <InteractionWithDialog />
        </div>
    );
};

export default DialogHeader;