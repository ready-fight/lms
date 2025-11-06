import { currentUser } from "@clerk/nextjs";
import { currentProfile } from "@/lib/current-profile";

export default async function getCurrentProfile() {
	try {
		
		const profile = await currentProfile();

		return {
			...profile,
			createdAt: profile.createdAt.toISOString(),
			updatedAt: profile.updatedAt.toISOString(),
		};
	} catch (error: any) {
		return null;
	}
}
