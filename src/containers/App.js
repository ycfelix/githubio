import PropTypes from "prop-types";
import React, { Component } from "react";
import myIcon from "../images/my_icon.png"
import roboticsIcon from "../images/robotics.png"
import hkustIcon from "../images/hkust.png"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const PersonalLinkIcon = () => (
  <div>
    <Button icon labelPosition='left'>
      <Icon name='github' />
      Github
    </Button>
    <Button icon labelPosition='left'>
      linkedIn
      <Icon name='linkedin' />
    </Button>
    <Button icon labelPosition='left'>
      Blogger
      <Icon name='blogger' />
    </Button>
  </div>
)


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Software developer"
      inverted
      style={{
        fontSize: mobile ? "2em" : "3em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "2.4em",
      }}
    />
    <p
      style={{
        fontSize: "1.33em",
      }}
    >
      Hello! My name is Felix. <br />
      I am a student, blogger & developer. <br />
    </p>
    <Header
      as="h2"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Header inverted>
      <Button animated color="primary">
        <Button.Content visible>Checkout my projects</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </Header>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () =>
    this.setState({
      fixed: false,
    });
  showFixedMenu = () =>
    this.setState({
      fixed: true,
    });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="left"
            style={{
              minHeight: 600,
              padding: "1em 0em "
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a"> Projects </Menu.Item>
                <Menu.Item as="a"> Gallery </Menu.Item>
                <Menu.Item as="a"> Resume </Menu.Item>
              </Container>
            </Menu>
            <Grid columns={2} stackable textAlign="center">
              
              <Grid.Row verticalAlign="middle">
                <Grid.Column textAlign="middle">
                  <HomepageHeading />
                </Grid.Column>
                <Grid.Column>
                  <Header>
                    <Image style={{'font-size':100}} avatar src={myIcon}/>
                      <Header inverted>
                        <PersonalLinkIcon/>
                      </Header>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () =>
    this.setState({
      sidebarOpened: false,
    });

  handleToggle = () =>
    this.setState({
      sidebarOpened: true,
    });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a"> Projects </Menu.Item>
          <Menu.Item as="a"> Gallery </Menu.Item>
          <Menu.Item as="a"> Resume </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 350,
              padding: "1em 0em",
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer> {children} </DesktopContainer>
    {/* <MobileContainer> {children} </MobileContainer> */}
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};


const MyContactInfo = () => (
  <div>
  <List>
    <List.Item>
      <List.Icon name='users' />
      <List.Content>Felix Yau</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>Kwai Chung, Hong Kong</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:ycfelix7@gmail.com'>ycfelix7@gmail.com</a>
      </List.Content>
    </List.Item>
  </List>
  </div>
)



const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment
      style={{
        padding: "8em 0em",
      }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header
              as="h3"
              style={{
                fontSize: "2em",
              }}
            >
              About myself
            </Header>
            <p
              style={{
                fontSize: "1.33em",
                textAlign:"justify"
              }}
            >
              Hi there! This is Felix, a junior developer who is passionate about 
              digital transformation & automation. I had been in HKUST studying computer science
              with a minor in robotics. My area of interest includes mobile application, 
              robotic process automation, computer vision & cloud technology.

            </p>
            <p
              style={{
                fontSize: "1.33em",
                textAlign:"justify"
              }}
            >
              Throughout my university life, I joined quite a few
              competitions and many of them gave me insights and 
              valuable experience about team work, software development and my career.
              Most important of all, I met a lot of friends, smart people and opportunities. 
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              rounded
              size="large"
              src={roboticsIcon}
            />
            <Header/>
              <Image
                rounded
                size="large"
                src={hkustIcon}
              />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge"> Go to my gallery </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/*  */}
    <Segment
      style={{
        padding: "8em 0em",
      }}
      vertical
    >
      <Container text>
        <Header
          as="h3"
          style={{
            fontSize: "2em",
            textAlign:"center"
          }}
        >
          Industrial Experience
          
        </Header>
        <Grid columns={1} stackable textAlign="center">
          <Grid.Row >
            <Grid.Column width={12}>
        <Header style={{
            fontSize: "1.2em",
            textAlign:"justify",
            fontWeight: "normal"
          }}>
          <p>
            I had a few internships during my time as an student. My first internship was 
            in Weltronics Component Limited, a local IT solution provider that is specialized in
            OCR technology. After that I went to Motorola Solution as an engineering assistant helping
            system testing for ShaTin Central Line project. My most recent internship was in IBM GBS,
            as a summer student intern that I assisted in the application support and maintenance project
            for a local airline company.<br/><br/><br/>

            With the experience in medium size IT solution providers and multinational IT 
            consulting firm, I become more enthusiastic about developing software that can 
            solve real-world problems. These internships not only provided me project handling 
            experience but also shed light on my career path. If you are interested, please take
            a look at me resume.
          </p>
        </Header>
        </Grid.Column>
        </Grid.Row>
        </Grid>

        <Header style={{
            fontSize: "2em",
            textAlign:"center"
          }}>
          <Button as="a" size="large">
          To my resume
        </Button>
        </Header>
        
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{
            margin: "3em 0em",
            textTransform: "uppercase",
          }}
        >
          <a href="#test"> Contact me </a>
        </Divider>
        <Header
          as="h3"
          style={{
            fontSize: "2em",
          }}
        >
          Open to collaboration on any projects
        </Header>
        <p
          style={{
            textAlign:"justify",
            fontSize: "1.33em",
          }}
        >
          If you have an exciting project idea that would like 
          a developer to casually help on, feel free to leave me a message or 
          contact me by email. If you would like to share career opportunities 
          you are welcome as well :-D 
        </p>
        <MyContactInfo/>
      </Container>
    </Segment>
    <Segment
      inverted
      vertical
      style={{
        padding: "5em 0em",
      }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a"> Myself </List.Item>
                <List.Item as="a"> Contact Me </List.Item>
                <List.Item as="a"> Awards </List.Item>
                <List.Item as="a"> Plans </List.Item>
              </List>
            </Grid.Column>
          
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Disclaimer
              </Header>
              <p>
                Any project publicly released on my github is free to use for any purpose
                 without the need to notify me.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
