import React from 'react';
import '../style.css';
import image from '../images/review.jpg';

export default function Why() {
    return (
        <div className="container why padding">
            <div className="row d-flex">
                <div className="column">
                    <para1>WHY CHOOSE GARMEN</para1>
                    <h2>Lowest Price Guaranteed, Quality Never Compromised</h2>
                    <p>Phasellus ultricies ex vitae neque placerat porta. Aenean libero eros ultrices vel tristique non ut, porta eget dolor. Donec vel ipsum imperdiet neque, sit amet porta facilisis elit. Nunc neque enim finibus at nisi non, auctor venenatis leo. Sed porta posuere nunc id diam ornare, pretium eleifend mi molestie. Fusce feugiat tortor malesuada pulvinar sagittis hendrerit purus felis. Vestibulum et auctor porttitor lectus sit amet consequat. Pellentesque rutrum risus sed sapien.</p>
                    <p>Aenean libero eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum imperdiet neque, sit amet porta facilisis elit. Donec vel ipsum imperdiet neque amet porta facilisis elit. Integer eto eros vehicula odio cursus egestas vel tristique faucibus tortor.</p>
                </div>
                <div className="column whysec">
                    <div>
                        <h3>95%</h3><br /><br />
                        <h3>Factory Experience</h3><br />
                    </div>
                    <div>
                        <h3>97%</h3><br /><br />
                        <h3>Textile Material</h3><br />
                    </div>
                    <div>
                        <h3>96%</h3><br /><br />
                        <h3>Worker Skills</h3><br />
                    </div>
                    <div>
                        <h3>93%</h3><br /><br />
                        <h3>Machinery & Equipment</h3><br />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column quote">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>"Ut et lorem eu enim mollis pharetra sed vel nisl. Suspendisse potenti. Sed pellentesque id ipsum sed egestas. Vestibulum auctor porttitor lectus sit amet consequat. Pellentesque rutrum risus sed sapien ullamcorper tincidunt."</p>
                </div>
                <div className="column quotesec">
                    <img src={image} />
                    <h3>Monica James</h3>
                    <p>Entrepreneur</p>
                </div>
            </div>
        </div>
    );
}