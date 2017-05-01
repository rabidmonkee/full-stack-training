import React, { Component } from 'react';

class Footer extends Component {
  render() {
	  if(this.props.data){
  		var networks = this.props.data.social.map(function (network){
  			return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
  		});
  	}
    return (
		<div>
			<footer>

				<div className="row">

					<div className="twelve columns">

						<ul className="social-links">
							{networks}
						</ul>

						<ul className="copyright">
							<li>&copy; Copyright 2014 CeeVee</li>
							<li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
						</ul>

					</div>

					<div id="go-top">
						<a className="smoothscroll" title="Back to Top" href="#home">
							<i className="icon-up-open"></i>
						</a>
					</div>

				</div>

			</footer>
		</div>
    );
  }
}

export default Footer;
