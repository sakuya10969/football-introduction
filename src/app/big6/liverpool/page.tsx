import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchTeamById } from "@/api/api";

export const getServerSideProps = async () => {
    const teamData = await fetchTeamById(40);
    return { props: { teamData } };
};
