import React from 'react';

import MailIcon from '@material-ui/icons/Mail';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import OngoingSite from '../pages/ongoing-site';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Matrix from '../pages/matrix';
import Message from '../pages/message';
import Notification from '../pages/notification';
import Contact from '../pages/contact';

export const menu=[
    {
        name:"Ongoing Projects",
        icon:<AccessTimeIcon/>,
        component:<OngoingSite/>
    },
    {
        name:"Contact",
        icon:<PermContactCalendarIcon/>,
        component:<Contact/>
    },
    {
        name:"Notifications",
        icon:<NotificationsIcon/>,
        component:<Notification/>
    },
    {
        name:"Matrix",
        icon:<RateReviewIcon/>,
        component:<Matrix/>
    },
    {
        name:"Email / SMS",
        icon:<MailIcon/>,
        component:<Message/>
    }
]