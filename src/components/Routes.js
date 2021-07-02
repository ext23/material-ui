import { 
    Receipt as ReceiptIcon, 
    People as PeopleIcon, 
    Gavel as GavelIcon,
    Person as PersonIcon
} from '@material-ui/icons'

import Teams from './Teams';
import Members from './Members';
import Tournaments from './Tournaments';
import Judges from './Judges';

export const Routes = [
    {anchor: 'Турниры', icon: <ReceiptIcon/>, path: '/tournaments', component: <Tournaments/>},
    {anchor: 'Команды', icon: <PeopleIcon />, path: '/teams', component: <Teams/>},
    {anchor: 'Участники', icon: <PersonIcon />, path: '/members', component: <Members/>},
    {anchor: 'Судьи', icon: <GavelIcon />, path: '/judges', component: <Judges/>},
];

export default Routes;