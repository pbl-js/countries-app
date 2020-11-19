import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { whiteBox } from "mixins/whiteBox";
import breakPoints from "theme/breakPoints";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.mainPadding};
  ${whiteBox}
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 1px;
  line-height: 1.3;
  text-align: justify;

  @media ${breakPoints.mobileL} {
    padding: 40px;
  }
`;

const AboutUs: React.FC<RouteComponentProps> = () => {
  return (
    <MainWrapper>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
        pulvinar dui sed blandit. Suspendisse dolor mauris, sagittis in suscipit
        eu, viverra sed nisi. Proin vel risus ac urna sagittis sodales. Integer
        vel risus pharetra nunc dictum pulvinar eu sed urna. Maecenas dignissim
        efficitur orci, bibendum blandit metus porta et. Sed lorem augue,
        tincidunt nec mi eu, aliquam egestas orci. Quisque eu leo iaculis,
        dapibus dui in, maximus orci. Praesent at malesuada nisl. Vivamus
        suscipit rutrum lorem, in dictum diam pulvinar vel. Donec vestibulum
        posuere libero ut porta. Ut et vestibulum enim. Fusce finibus, erat eu
        accumsan finibus, massa nulla bibendum urna, ut sagittis magna ex vel
        ipsum. Aenean condimentum nunc leo, et facilisis lectus laoreet sit
        amet. Cras vitae purus eget quam ornare malesuada. Duis interdum
        pellentesque fermentum. Morbi congue, tortor quis commodo tempor, augue
        arcu faucibus nisi, vitae congue neque est vitae quam.
      </p>
      <p>
        Vivamus eu metus condimentum, posuere lectus ac, aliquet lectus. Etiam
        nec lacus risus. In fringilla eros vitae semper porttitor. Nam quis
        condimentum odio, nec scelerisque turpis. Pellentesque est ex, ornare
        sit amet augue ac, efficitur faucibus ligula. Aliquam eu ipsum eu augue
        porta rutrum in quis nunc. Suspendisse risus mauris, condimentum at
        tempor sed, fermentum nec dui. Duis gravida vulputate rhoncus.
      </p>
      <p>
        Quisque nec metus vitae lorem eleifend volutpat. Integer nulla nibh,
        finibus in fringilla et, vulputate egestas sapien. Fusce leo ante,
        dignissim eget massa ac, bibendum placerat ex. Suspendisse non risus sed
        libero placerat commodo non id neque. Praesent convallis sem vel ex
        rhoncus ornare vel sed erat. Cras vel lacus auctor, tempor odio in,
        scelerisque diam. Proin consequat a tortor vitae pellentesque. Etiam
        eget posuere nunc. Quisque at sollicitudin nulla. Nulla feugiat, sem et
        accumsan commodo, eros erat bibendum nulla, ac fermentum augue risus in
        orci. Etiam aliquam odio eleifend nulla maximus venenatis.
      </p>
      <p>
        Sed turpis felis, maximus non eros et, vulputate dapibus arcu. Aliquam
        nibh dui, varius vel maximus eget, hendrerit eget tortor. Maecenas a
        molestie quam. Nullam dapibus euismod arcu non imperdiet. Donec sit amet
        justo et leo viverra elementum nec nec mi. Integer porta mattis neque ut
        porttitor. Mauris porttitor erat sed imperdiet sodales. Sed elit quam,
        consequat eu quam a, imperdiet cursus ex. Integer at quam at dui
        dignissim egestas accumsan non ante. Morbi dictum turpis nulla, a
        elementum nibh imperdiet blandit. Fusce commodo, justo sed pharetra
        ultricies, dolor risus faucibus sem, semper tempus odio est molestie
        nibh. Suspendisse et sollicitudin lacus, a pulvinar dui. Aenean et justo
        nibh. Nam a faucibus justo.
      </p>
      <p>
        Donec non egestas metus. Ut eget massa molestie, sagittis nisl quis,
        gravida metus. Donec maximus dolor erat, non ultricies diam interdum
        quis. Morbi convallis ultrices ante eu volutpat. Nullam vel pellentesque
        metus. Pellentesque efficitur nunc velit, et vestibulum ex euismod et.
        Nam ac arcu tincidunt, feugiat diam vitae, rutrum leo. Quisque fringilla
        magna placerat dolor interdum iaculis. Fusce mollis nulla magna, eget
        fermentum est rhoncus eget. Morbi imperdiet elit non ipsum consequat
        rutrum. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos.
      </p>
    </MainWrapper>
  );
};

export default AboutUs;
