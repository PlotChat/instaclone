import { instagramSans } from "./fonts/fonts";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html suppressHydrationWarning lang="en" className={instagramSans.variable}>
			<body className="font-sans antialiased bg-base">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
