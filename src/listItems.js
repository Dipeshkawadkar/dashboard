import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';





export const mainListItems = (

    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Branch/Courses" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Colleges" />
        </ListItem>

        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="All" />
        </ListItem>

        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Send Invitation" />
        </ListItem>

        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Add College" />
        </ListItem>
        <hr />
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Companies" />
        </ListItem>

        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="All" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
        </ListItem>
        <hr />
        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="All Jobs" />
        </ListItem>

        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Open Jobs" />
        </ListItem>

        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Application Status" />
        </ListItem>

        <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Closed Jobs" />
        </ListItem>
        <hr />
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Data" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary=" Generate Report" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Update Youtube Links" /> 
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="UPdate Blog Links" />
        </ListItem>

    </div>
);