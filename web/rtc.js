var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.msRTCPeerConnection
var RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.msRTCSessionDescription
var RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.msRTCIceCandidate

function makePeer() {
  return new RTCPeerConnection(
    {iceServers: [{ 'url': 'stun:stun.services.mozilla.com'}, {'url': 'stun:stun.l.google.com:19305'}]},
    {optional: [{RtpDataChannels: false}]}
  )
}

export { RTCPeerConnection, RTCSessionDescription, RTCIceCandidate, makePeer }
