import { PureComponent } from 'react';
import { Header } from '../components/header';
import { Body } from '../components/body';

export default class Index extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        )
    }
}
