import React, { PureComponent } from 'react';
import { StyledBody, StyledText } from './styled';

export class Body extends PureComponent {
    render () {
        return (
            <StyledBody>
                <StyledText>lorem ipsum</StyledText>
            </StyledBody>
        )
    }
}
