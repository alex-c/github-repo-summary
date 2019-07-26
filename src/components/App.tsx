import React, { useState } from 'react';

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
import api from '../services/api';

function App() {
    const [userName, setUserName] = useState("");
    const clearButton = (
        <span>
            <Tooltip content="Search">
                <Button
                    icon="search"
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={() => {
                        api.getUser(userName)
                            .then(result => console.log(result))
                            .catch(error => console.error(error));
                    }}
                />
            </Tooltip>
            <Tooltip content="Clear">
                <Button
                    icon="cross"
                    intent={Intent.WARNING}
                    minimal={true}
                    onClick={() => setUserName("")}
                />
            </Tooltip>
        </span>
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
                        value={userName}
                        onChange={(event: { target: any; }) => {setUserName(event.target.value)}}
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