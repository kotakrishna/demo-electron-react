import React from 'react'
import DisplayButton from '../Components/DisplayButton'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import IconButton from '@material-ui/core/IconButton';
import styles from "../styles/Home.module.scss"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Typography } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ViewListIcon from '@material-ui/icons/ViewList';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
export default function HomePage() {
    let menu={
            title:"Stats",
            icon: PermIdentityIcon
        }

        let history = useHistory();
    
        // const change=(value)=>{

        //     console.log(history.location.pathname);
        //     history.push(`/${value}`);
        // }
    return (
        <section className={styles.container}>
            <div className={styles.eachButton}>
                <Link to="/req" style={{textDecoration:"none",color:'white'}} >   
                <IconButton  edge="end">
                    <InboxIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Requisition </Typography>
                </Link>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <SearchIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Results Inquiry </Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <ViewListIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> WorkSheets </Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <NoteAddIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Result Entry </Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <PlaylistAddCheckIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Verify/Approved Results </Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <AccountBalanceIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Accounts Received/Billing</Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <PersonIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Patient </Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <BarChartIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Analytics </Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <ContactSupportIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Support </Typography>
                </div>
            <div className={styles.eachButton}>
                <IconButton  edge="end">
                    <CreateIcon fontSize="large" className={styles.icon} />
                </IconButton>
                <Typography variant="h5"> Client Reg </Typography>
                </div>
            
        </section>
    )
}
