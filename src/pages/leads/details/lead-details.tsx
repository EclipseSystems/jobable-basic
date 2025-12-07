import { Button } from "@/components/ui/button"
import { PageTitle } from "@/components/pageTitle";

export default function LeadsDetails() {
	return (
		<>
			<PageTitle title={'Details'} padding={false} />
			<Button>Convert to client</Button>
		</>
	)
}