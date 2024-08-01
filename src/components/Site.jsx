import React from 'react'
const siteText = [
	{
		text: ["Make", "Portfolio", "Han Ju Eun"],
		title: "금융 사이트",
		code: "/",
		view: "/",
		info: ["site coding", "production perriod : 10day", "use stack : HTML5 / CSS3 / JQUERY / FIGMA"],
	}, {
		text: ["Make", "Team project", "Tamyok"],
		title: "게임 사이트",
		code: "/",
		view: "/",
		info: ["site coding", "production perriod : 14day", "use stack : HTML5 / CSS3 / JQUERY / JAVASCRIPT / FIGMA"],

	}, {
		text: ["Make", "Portfolio", "Han Ju Eun"],
		title: "패션 사이트",
		code: "/",
		view: "/",
		info: ["site coding", "production perriod : 10day", "use stack : HTML5 / CSS3 / JQUERY / JAVASCRIPT / FIGMA"],

	}, {
		text: ["Make", "Redesign", "Han Ju Eun"],
		title: "코레일 사이트",
		code: "/",
		view: "/",
		info: ["site coding", "production perriod : 3day", "use stack : HTML5 / CSS3 / JQUERY / JAVASCRIPT / FIGMA"],

	}
]





const Site = () => {
	return (
		<section id='site'>
			<div className="site_inner">
				<div className="site_title">
					Site coding <em>나의 작품</em>
				</div>
				<div className="site_wrap">
					{
						siteText.map((site, key) => (
							<article className={`site_item s${key+1}`} key={key}>
								<span className='num'>{key+1}.</span>
								<div className="text">
									<div>{site.text[0]}</div>
									<div>{site.text[1]}</div>
									<div>{site.text[2]}</div>
								</div>
								<h3 className='title'>
									{site.title}
								</h3>
								<div className="btn">
									<a href={site.code}>사이트 바로가기</a>
									<a href={site.view}>자세히 보기</a>
								</div>
								<div className="info">
									<span>{site.info[0]}</span>
									<span>{site.info[1]}</span>
									<span>{site.info[2]}</span>
								</div>
							</article>
						))
					}



				</div>
			</div>
		</section>
	)
}

export default Site
