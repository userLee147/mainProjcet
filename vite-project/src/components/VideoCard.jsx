import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width : 320px;
    background: #eedfdf;
`
const Thumbnail = styled.img`
    width:100%;
    height:180px;
`

const ChannelInfo = styled.div`
display : flex ;
align-items: center;
align-items: flex-start;
`
const ChannelLogo = styled.img`
width: 36px;
height: 36px;
border-radius: 50px;
margin-right: 12px;
`


const ChannelDetails = styled.div`
flex-grow:  1;
text-align: left;
`
const Title = styled.h3`
font-size: 16px;
font-weight: 500;
margin: 0 0 4px 0;
line-height: 1.4;
`

const ChannelName = styled.p`
font-size: 14px;
color: #606060;
margin: 0 0 4px 0;
line-height: 1.4;
`

const ViewInfo =styled.p`
font-size: 14px;
font-weight: 400;
color: #606060;
margin-top: 4px;
`


const VideoCard = ({ video }) => {
    return (
        <Container>
            <Thumbnail 
                src = {video.sumbnail}
                alt = {video.title}
            />

            <ChannelInfo>
                <ChannelDetails>
                    <ChannelLogo 
                    src={video.logo} alt={video.channelName} 
                    />
                </ChannelDetails>
                <ChannelDetails>
                    <Title>{video.title}</Title>
                    <ChannelName>{video.channelName}</ChannelName>
                    <ChannelName>{video.views}조회수 ＃ {video.date} </ChannelName>
                </ChannelDetails>
            </ChannelInfo>
        </Container>
    )
}

export default VideoCard