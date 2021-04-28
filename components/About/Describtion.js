import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = tw.section`w-full bg-black py-28`;
const WrapTitle = tw.div`col-span-full py-16`;
const Title = tw.h1`text-8xl text-white-opacity-50 text-center`;
const WrapSubtitle = tw.div`col-span-full lg:col-span-5`;
const Subtitle = tw.p`text-2xl text-white text-left opacity-75`;
const Describtion = () => {
  return (
    <Section id="hero-about">
      <Container>
        <Grid>
          <WrapTitle>
            <Title>
              We believe in the technology as a medium of{' '}
              <strong tw="text-white font-semibold">
                outstanding interaction
              </strong>
              . It has the power to{' '}
              <strong tw="text-white font-semibold">influence </strong> people
              in many ways, and that is the{' '}
              <strong tw="text-white font-semibold"> reason </strong> for our
              existence. Helping you grow, becoming expressing{' '}
              <strong tw="text-white font-semibold"> sincere </strong> digital
              experience.
            </Title>
          </WrapTitle>
          <WrapSubtitle tw="lg:col-start-2">
            <Subtitle>
              Our team is proficient in a variety of services that can help
              improve productivity of your company or institution. With our
              ability to produce websites, mobile aps and ios aps we will{' '}
            </Subtitle>
          </WrapSubtitle>
          <WrapSubtitle tw="lg:col-end-12">
            <Subtitle>
              help solve your problem with good and useful products. Let’s talk
              about how our services can add value to your company.
            </Subtitle>
          </WrapSubtitle>
        </Grid>
      </Container>
    </Section>
  );
};

export default Describtion;
