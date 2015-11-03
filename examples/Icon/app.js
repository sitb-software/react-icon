import React, { Component } from "react";
import { render } from "react-dom";
import { Grid, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../node_modules/bootstrap/less/bootstrap.less";
import "../../node_modules/font-awesome/less/font-awesome.less";
import "../style.css";
import Icon from "../../lib";

class App extends Component {

    render() {
        return <Grid>
            <Row>
                <Col md={12}>
                    <h1>React Icon examples</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Basic Icon</h2>
                    <p>the basic icon</p>
                    <h4>Example</h4>
                    <Icon/>
                    <Icon faStyle="gg"/>
                    <Icon faStyle="500px"/>
                    <Icon faStyle="amazon"/>
                    <Icon faStyle="weixin"/>
                    <Icon faStyle="qq"/>
                    <h4>Code</h4>
                    <pre>
                        {"<Icon/>"}<br />
                        {"<Icon faStyle='gg'/>"}<br />
                        {"<Icon faStyle='500px'/>"}<br />
                        {"<Icon faStyle='amazon'/>"}<br />
                        {"<Icon faStyle='weixin'/>"}<br />
                        {"<Icon faStyle='qq'/>"}
                    </pre>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Larger Icons</h2>
                    <p>To increase icon sizes relative to their container.</p>
                    <h4>Example</h4>
                    <Icon faStyle="camera-retro" size="1"/>
                    <Icon faStyle="camera-retro" size="2"/>
                    <Icon faStyle="camera-retro" size="3"/>
                    <Icon faStyle="camera-retro" size="4"/>
                    <Icon faStyle="camera-retro" size="5"/>
                    <h4>Code</h4>
                    <pre>
                        {"<Icon faStyle='camera-retro' size='1'/>"}<br />
                        {"<Icon faStyle='camera-retro' size='2'/>"}<br />
                        {"<Icon faStyle='camera-retro' size='3'/>"}<br />
                        {"<Icon faStyle='camera-retro' size='4'/>"}<br />
                        {"<Icon faStyle='camera-retro' size='5'/>"}
                    </pre>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Fixed Width Icons</h2>
                    <p>Use <code>fixed</code> to set icons at a fixed width.</p>
                    <Row>
                        <Col md={4}>
                            <h4>Example</h4>
                            <ListGroup>
                                <ListGroupItem href="#"><Icon faStyle="home" fixed/> Home</ListGroupItem>
                                <ListGroupItem href="#"><Icon faStyle="book" fixed/> Library</ListGroupItem>
                                <ListGroupItem href="#"><Icon faStyle="pencil" fixed/> Applications</ListGroupItem>
                                <ListGroupItem href="#"><Icon faStyle="cog" fixed/> Settings</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={8}>
                            <h4>Code</h4>
                            <pre>{"<Icon faStyle='home' fixed />"}</pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>List Icons</h2>
                    <p>Use fa-ul and fa-li to easily replace default bullets in unordered lists.</p>
                    <Row>
                        <Col md={4}>
                            <h4>Example</h4>
                            <ul className="fa-ul">
                                <li><Icon faStyle="check-square" list/> List icons</li>
                                <li><Icon faStyle="check-square" list/> can be used</li>
                                <li><Icon faStyle="spinner" list animate="spin"/> as bullets</li>
                                <li><Icon faStyle="square" list/> in lists</li>
                            </ul>
                        </Col>
                        <Col md={8}>
                            <h4>Code</h4>
                            <pre>
                                {'<ul className="fa-ul">'}<br />
                                {'  <li><Icon faStyle="check-square" list/> List icons</li>'}<br />
                                {'  <li><Icon faStyle="check-square" list/> can be used</li>'}<br />
                                {'  <li><Icon faStyle="spinner" list animate="spin"/> as bullets</li>'}<br/>
                                {'  <li><Icon faStyle="square" list/> in lists</li>'}<br/>
                                {'</ul>'}
                            </pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Bordered & Pulled Icons</h2>
                    <p>Use <code>border</code> and <code>pullRight</code> or <code>pullLeft</code> for easy pull quotes or article icons.</p>
                    <Row>
                        <Col md={4}>
                            <h4>Example</h4>
                            <Icon faStyle="quote-left" size="3" pullLeft border/>
                            <span>...tomorrow we will run faster, stretch out our arms farther... And then one fine morning— So we beat on,
                                boats against the current, borne back ceaselessly into the past.</span>
                        </Col>
                        <Col md={8}>
                            <h4>Code</h4>
                            <pre>
                                {'<Icon faStyle="quote-left" size="3" pullLeft border/>'}<br />
                                ...tomorrow we will run faster, stretch out our arms farther... And then one fine morning— So we beat on,
                                boats against the current, borne back ceaselessly into the past.
                            </pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Animated Icons</h2>
                    <p>Use the fa-spin class to get any icon to rotate, and use fa-pulse to have it rotate with 8 steps. Works well with fa-spinner, fa-refresh, and fa-cog.</p>
                    <Row>
                        <Col md={4}>
                            <h4>Example</h4>
                            <Icon faStyle="spinner" animate="spin" size="3"/>
                            <Icon faStyle="circle-o-notch" animate="spin" size="3"/>
                            <Icon faStyle="refresh" animate="spin" size="3"/>
                            <Icon faStyle="cog" animate="spin" size="3"/>
                            <Icon faStyle="spinner" animate="pulse" size="3"/>
                        </Col>
                        <Col md={8}>
                            <h4>Code</h4>
                            <pre>
                                {'<Icon faStyle="spinner" animate="spin"/>'}<br />
                                {'<Icon faStyle="circle-o-notch" animate="spin"/>'}<br />
                                {'<Icon faStyle="refresh" animate="spin"/>'}<br />
                                {'<Icon faStyle="cog" animate="spin"/>'}<br />
                                {'<Icon faStyle="spinner" animate="pulse"/>'}<br />
                            </pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Rotated & Flipped</h2>
                    <p>To arbitrarily rotate and flip icons, use the fa-rotate-* and fa-flip-* classes.</p>
                    <Row>
                        <Col md={4}>
                            <h4>Example</h4>
                            <Icon faStyle="shield"/> normal <br/>
                            <Icon faStyle="shield" rotate={90}/> fa-rotate-90 <br/>
                            <Icon faStyle="shield" rotate={180}/> fa-rotate-180 <br/>
                            <Icon faStyle="shield" rotate={270}/> fa-rotate-270 <br/>
                            <Icon faStyle="shield" flipHorizontal/> fa-flip-horizontal <br/>
                            <Icon faStyle="shield" flipVertical/> icon-flip-vertical <br/>
                        </Col>
                        <Col md={8}>
                            <h4>Code</h4>
                            <pre>
                                {'<Icon faStyle="shield"/>'} normal <br/>
                                {'<Icon faStyle="shield" rotate={90}/>'} fa-rotate-90 <br/>
                                {'<Icon faStyle="shield" rotate={180}/>'} fa-rotate-180 <br/>
                                {'<Icon faStyle="shield" rotate={270}/>'} fa-rotate-270 <br/>
                                {'<Icon faStyle="shield" flipHorizontal/>'} fa-flip-horizontal <br/>
                                {'<Icon faStyle="shield" flipVertical/>'} icon-flip-vertical <br/>
                            </pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Stacked Icons</h2>
                    <p>To stack multiple icons, use the fa-stack class on the parent, the fa-stack-1x for the regularly sized icon, and fa-stack-2x for the larger icon. fa-inverse can be used as an
                        alternative icon color. You can even throw larger icon classes on the parent to get further control of sizing.</p>
                    <Row>
                        <Col md={4}>
                            <h4>Example</h4>
                            <Icon size="1">
                                <Icon faStyle="square-o" stack="2"/>
                                <Icon faStyle="twitter" stack="1"/>
                            </Icon>
                            fa-twitter on fa-square-o<br />
                            <Icon size="1">
                                <Icon faStyle="circle" stack="2"/>
                                <Icon faStyle="flag" stack="1" inverse/>
                            </Icon>
                            fa-flag on fa-circle<br />

                            <Icon size="1">
                                <Icon faStyle="square" stack="2"/>
                                <Icon faStyle="terminal" stack="1" inverse/>
                            </Icon>
                            fa-terminal on fa-square<br/>

                            <Icon size="1">
                                <Icon faStyle="camera" stack="1"/>
                                <Icon faStyle="ban" stack="2" className="text-danger"/>
                            </Icon>
                            fa-ban on fa-camera
                        </Col>
                        <Col md={8}>
                            <h4>Code</h4>
                            <pre>
                                {'<Icon size="1">'}<br />
                                {'    <Icon faStyle="square-o" stack="2"/>'}<br />
                                {'    <Icon faStyle="twitter" stack="1"/>'}<br />
                                {'</Icon>'}
                                {'fa-twitter on fa-square-o<br />'}<br />

                                {'<Icon size="1">'}<br />
                                {'    <Icon faStyle="circle" stack="2"/>'}<br />
                                {'    <Icon faStyle="flag" stack="1" inverse/>'}<br />
                                {'</Icon>'}<br />
                                {'fa-flag on fa-circle<br />'}<br />

                                {'<Icon size="1">'}<br />
                                {'    <Icon faStyle="square" stack="2"/>'}<br />
                                {'    <Icon faStyle="terminal" stack="1" inverse/>'}<br />
                                {'</Icon>'}<br />
                                {'fa-terminal on fa-square<br/>'}<br />

                                {'<Icon size="1">'}<br />
                                {'    <Icon faStyle="camera" stack="1"/>'}<br />
                                {'    <Icon faStyle="ban" stack="2" className="text-danger"/>'}<br />
                                {'</Icon>'}<br />
                            fa-ban on fa-camera
                        </pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </
            Grid >;
    }
}

render(<App />, document.getElementById("container"));
