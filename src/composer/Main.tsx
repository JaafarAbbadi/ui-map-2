
import { Header } from './components/Header';
import { Person } from '@mui/icons-material';
import { Button } from './components/ButtonGroup';
import { Basic } from './components/Basic';
import { Toolbar } from '@mui/material';
import { TextInput } from './components/TextInput';


/**
 * 
 * 
 * 
 * Categorization
 * 
 * Types of components: (CRUD), (Local, Remote), (Single, Multi);
 * Create  Single   => usually a form 
 * Create  Multi    => usually a form with a counter
 * 
 * Read  Single     => usually a read only form
 * Read  Multi      => usually a list
 * 
 * Update Single    => usually prefilled form
 * Update Multi     => usually an entity checkbox selection & selected properties form 
 * 
 * Delete Single    => usually a delete button and an are you sure popup
 * Delete Multi     => usually an entity checkbox selection & a delete button 
 */

// TODO: init a secure role based Parse server & dashboard & use it to Implement Generic Actions, Effects, Reducers & selectors 
// TODO: Decide with the guys if we should use firebase instead since its faster to implement #IGNORED
// TODO: Create Generic Actions #DONE
/**
 * class Action<T>{
 * read: (Multiple||Single, Observable||Promise, Local||remote) => (1 action if local || 3 if remote , effects if remote, reducers, Selectors)
 * write: (Create||Update||Delete, Multiple||single, Local || remote) => (1 action if local || 3 actions if remote, effects if remote, reducers if local)
 */
//TODO: Create Generic Component #DONE
/**
 * props: {...local, ...remote} => create local & remote crud actions
 * parent: in dom tree
 * views: {element, {slot,prop}[], {event, action}, views: []} Tree
 * lifeCycleEvents: {lifecycle, readactions}[]
 */ 
// TODO: implement override operations for generic component 
/**
 * addition : a.props + b.props  = c.props (new entity) 
 * subtraction : a.props - b.props  = c.props (new entity)
 * prioritize : dependencyTree.priotize((a,b) => a > b) => b.validations = b.validations + a.validations
 * compose: compose((a,b, slot) => a > b) => a.views.slot + new selection view of b. 
 * 
 */

/**Styles */
const row = {
    container:{
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
    },
    item: {flex: '0 1 auto', m: '10px'},
};

const title = () => <h1>Hello world</h1>;
const profileButton = () => Button({variant: 'contained',  child: () => <Person/>});
const menuButton = () => Button({variant: 'contained', 'child': () => 'hello world'});
const textInput = () => TextInput({'title': 'yo', onChange: (val) => {console.log(val)}});

export function Main(...properties: any[]) {
    const header = Header({slots: [menuButton,title, profileButton, textInput], })
    return header;
}