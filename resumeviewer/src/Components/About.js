import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
		<div>
			<section id="about">

				<div className="row">

					<div className="three columns">

						<img className="profile-pic"  src="images/profilepic.jpg" alt="" />

					</div>

					<div className="nine columns main-col">

						<h2>About Me</h2>

						<p>
							Lorem Ipsum
						</p>

						<div className="row">

							<div className="columns contact-details">

								<h2>Contact Details</h2>
								<p className="address">
									<span>Jonathan Doe</span><br />
									<span>
										1600 Amphitheatre Parkway<br />
										Mountain View, CA 94043 US
									</span><br />
									<span>(123)456-7890</span><br />
									<span>anyone@website.com</span>
								</p>

							</div>

							<div className="columns download">
								<p>
									<a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
								</p>
							</div>

						</div>

					</div>

				</div>

			</section>
		</div>
    );
  }
}

export default About;
