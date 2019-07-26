import React from 'react';

import {
    Alignment,
    Button,
    AnchorButton,
    Navbar,
    Intent,
    Tooltip,
    InputGroup
} from "@blueprintjs/core";
import Summary from './Summary';

function App() {
    const clearButton = (
        <Tooltip content="Clear">
            <Button
                icon="cross"
                intent={Intent.PRIMARY}
                minimal={true}
                //onClick={this.handleLockClick}
            />
        </Tooltip>
    );
    return (
        <div>
        <Navbar>
            <div className="viewport">
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Github Repo Summary</Navbar.Heading>
                    <Navbar.Divider />
                    <InputGroup
                        placeholder="Github user name"
                        rightElement={clearButton}
                    />
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <AnchorButton icon="git-branch" text="Github" href="https://github.com/alex-c/github-repo-summary" target="_blank" />
                </Navbar.Group>
            </div>
        </Navbar>
        <Summary></Summary>
        </div>
    );
}

export default App;