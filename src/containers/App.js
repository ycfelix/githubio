import PropTypes from "prop-types";
import React, { Component } from "react";
import myIcon from "../images/my_icon.png"
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

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Passionate developer"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
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
      content="Checkout some of my projects"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button primary size="huge">
      GO <Icon name="right arrow" />
    </Button>
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
              minHeight: 700,
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
                <Grid.Column>
                  <HomepageHeading />
                </Grid.Column>
                <Grid.Column>
                  <Header inverted>
                    <Image style={{'font-size':100}} avatar src={myIcon}/>
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
    <MobileContainer> {children} </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

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
              Testing
            </Header>
            <p
              style={{
                fontSize: "1.33em",
              }}
            >
              Testing content
            </p>
            <Header
              as="h3"
              style={{
                fontSize: "2em",
              }}
            >
              Testing content
            </Header>
            <p
              style={{
                fontSize: "1.33em",
              }}
            >
              Testing content
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/images/wireframe/white-image.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge"> Check it Out </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment
      style={{
        padding: "0em",
      }}
      vertical
    >
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em",
            }}
          >
            <Header
              as="h3"
              style={{
                fontSize: "2em",
              }}
            >
              "Test content"
            </Header>
            <p
              style={{
                fontSize: "1.33em",
              }}
            >
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em",
            }}
          >
            <Header
              as="h3"
              style={{
                fontSize: "2em",
              }}
            >
              "I shouldn't have gone with their competitor."
            </Header>
            <p
              style={{
                fontSize: "1.33em",
              }}
            >
              <Image avatar src="/images/avatar/large/nan.jpg" />
              <b> Nan </b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
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
          }}
        >
          Testing 3
        </Header>
        <p
          style={{
            fontSize: "1.33em",
          }}
        >
          testing 4
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{
            margin: "3em 0em",
            textTransform: "uppercase",
          }}
        >
          <a href="#test"> Case Studies </a>
        </Divider>
        <Header
          as="h3"
          style={{
            fontSize: "2em",
          }}
        >
          Did We Tell You About Our Bananas ?
        </Header>
        <p
          style={{
            fontSize: "1.33em",
          }}
        >
          testing 5
        </p>
        <Button as="a" size="large">
          I 'm Still Quite Interested
        </Button>
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
                <List.Item as="a"> Sitemap </List.Item>
                <List.Item as="a"> Contact Us </List.Item>
                <List.Item as="a"> Test </List.Item>
                <List.Item as="a"> Plans </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a"> Pre - Order </List.Item>
                <List.Item as="a"> FAQ </List.Item>
                <List.Item as="a"> How To Access </List.Item>
                <List.Item as="a"> Test </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re - engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;