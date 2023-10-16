import logo from "../../public/logo.svg";

function Logo() {
	return (
		<>
			<a href="/">
				<img src={logo} height={64} width={64} alt="logo" />
			</a>
		</>
	)
}

export { Logo }
