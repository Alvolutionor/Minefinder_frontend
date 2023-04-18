import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

interface IPageWrapperProps {
  children: React.ReactNode;
}
const PageContainer = styled.div``;
const ContentWrapper = styled.div``;
const PageWrapper = ({ children }: any): JSX.Element => {
  return (
    <PageContainer>
      <Header />
      <ContentWrapper>
        <Outlet/>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default PageWrapper;
