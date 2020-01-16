import React, { PureComponent } from 'react';
import { StyledHeader, StyledButton } from './styled';

export class Header extends PureComponent {
    render () {
        return (
            <React.Fragment>
                <StyledHeader>Unnamed App</StyledHeader>
                <StyledButton>Soy un botón</StyledButton>
            </React.Fragment>
        )
    }
}
