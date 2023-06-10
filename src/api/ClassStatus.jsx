import React from 'react';
import GetClass from './GetClass';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Approve = (id) => {

    const [, refetch] = GetClass()

    const info = {
        status: 'Approve'
    }

    axios.patch(`http://localhost:5000/${id}`, info)
        .then(data => {

            console.log(data.data)
            if (data.data.modifiedCount > 0) {
                // refetch()
                toast('Status Approve')
            }
        })



};




export const Deny = (id) => {
    const [, refetch] = GetClass()

    const info = {
        status: 'Deny'
    }

    axios.patch(`http://localhost:5000/${id}`, info)
        .then(data => {

            console.log(data.data)
            if (data.data.modifiedCount > 0) {
                // refetch()
                toast('Status Approve')
            }
        })


}