import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard('e6a62de1-331f-45d2-9384-98678c396f62');
	return (
		<Container>
			<div className="space-yt-10 pb-10">
				<Billboard data={billboard} />
			</div>
		</Container>
	);
};

export default HomePage;
