import User from "./User";

import UserClass from "./UserClass";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const About = () => {
    return (
        <div>
            <h1>About component</h1>
            <h2>this is namasete react</h2>
            {/* <User name={"Rishabh from functional component"} />
            <UserClass name={"Rishabh from class component"}/> */}

<Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
        </div>
    )
}

export default About;