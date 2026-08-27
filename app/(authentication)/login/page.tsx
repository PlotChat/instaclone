import Image from "next/image";
import instagramLogo from "@/public/images/logo.webp";
import LoginHeader from "@/public/images/login_header.webp";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

const page = () => {
	return (
			<div className="grid grid-rows-[auto_1fr_auto] lg:grid-rows-[1fr_auto] lg:grid-cols-[2fr_1.5fr] h-dvh">
				<header className="py-6 lg:pt-14 lg:px-14 flex flex-col lg:gap-5 items-center lg:border-r-3 border-border-subtle w-full">
					<div className="w-full space-y-3">
						<Image
							className="h-20 w-auto mx-auto lg:mx-0"
							src={instagramLogo}
							alt="Instagram"
							priority
						/>
						<div className="px-20 text-[2.5rem] hidden lg:block text-center">
							See everyday moments from your close friends.
						</div>
					</div>
					<Image
						className="hidden h-[50dvh] lg:block object-contain"
						src={LoginHeader}
						alt="Login header image"
						priority
					/>
				</header>
				<div className="py-15 lg:py-0 bg-surface flex justify-center items-center">
					<form className="w-full max-w-120 mx-auto px-10 lg:max-w-full">
						<div className="flex flex-col gap-4">
							<label className="text-lg font-semibold">
								Log into Instagram
							</label>
							<Input
								id="name"
								type="text"
								placeholder="Mobile number, username or email"
                coolPlaceholder
								required
							></Input>
							<Input coolPlaceholder type="password" placeholder="Password" required></Input>
						</div>
						<Button className="mt-5" size="md" disabled>
							Log in
						</Button>
						<Button className="mt-2" variant="ghost">
							Forgot Password?
						</Button>

						<Button className="mt-16" variant="secondary">
							Log in with Facebook
						</Button>
						<Button className="mt-2" variant="outline">
							Create new account
						</Button>
					</form>
				</div>
				<footer className="lg:cols-span-1 py-5 px-10 w-full border-t border-border-subtle bg-base text-secondary text-xs">
					<div>
						Some footer Some footer Some footer Some footer Some footer Some
						footer Some footer Some footer
					</div>
				</footer>
			</div>
	);
};
export default page;
