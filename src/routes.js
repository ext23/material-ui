import { 
    Receipt as ReceiptIcon, 
    People as PeopleIcon, 
    Gavel as GavelIcon,
    Person as PersonIcon
} from '@material-ui/icons'

export const ROUTES = [
    {anchor: 'Турниры', icon: <ReceiptIcon/>, eventListener: () => alert('123')},
    {anchor: 'Команды', icon: <PeopleIcon />, eventListener: () => alert('123')},
    {anchor: 'Участники', icon: <PersonIcon />, eventListener: () => alert('123')},
    {anchor: 'Судьи', icon: <GavelIcon />, eventListener: () => alert('123')},
];

export default ROUTES;