import React, { useState, useCallback } from 'react';
import Input from '../../input';
import { useAppDispatch } from '../../../redux/store';
import { findUser } from '../../../redux/slices/usersSlice';
import { debounce } from 'lodash';

const SearchUsers = () => {
    const [inputValue, setValue] = useState("");
    const dispatch = useAppDispatch();

    const debonceValueInput = useCallback(
        debounce((str) => {
            //@ts-ignore
            dispatch(findUser(str))
        }, 500), []
    );

    const onChangeInput = (value = '') => {
        setValue(value);
        //@ts-ignore
        debonceValueInput(value);
    };
    return <Input value={inputValue} onChange={(e: any) => onChangeInput(e.target.value)} />;
};

export default SearchUsers;