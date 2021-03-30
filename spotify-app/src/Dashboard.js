import React, { useState, useEffect } from "react";
import useAuth from "./useAuth";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./TrackSearchResult";
import Player from "./Player";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
  clientId: "db510edf6d434cb59bb9b3a6953b476d",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [plyingTrack, setPlyingTrack] = useState();
  const [lyrics, setLyrics] = useState("");

  const chooseTrack = (track) => {
    setPlyingTrack(track);
    setSearch("");
    setLyrics("");
  };

  useEffect(() => {
    if (!plyingTrack) return;
    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: plyingTrack.title,
          artist: plyingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [plyingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResult([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchResult(
        res.body.tracks.items.map((track) => {
          const minAlbumImage = track.album.images.reduce((minImg, img) => {
            if (img.height < minImg.hight) return img;
            return minImg;
          }, track.album.images[0]);

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: minAlbumImage.url,
          };
        })
      );
    });
  }, [search, accessToken]);

  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></Form.Control>
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResult.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResult.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <Player accessToken={accessToken} trackUri={plyingTrack?.uri}></Player>
    </Container>
  );
}
