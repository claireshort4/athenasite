import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

export const ParticipantCard = ({ name, image, bio, title, img }) => (
    <Card style={{ maxWidth: 345, margin: 'auto', height: img == "False" ? 100 : "37em" }}>
        {img != "False" && <CardMedia
            component="img"
            alt={`Image of ${name}`}
            height="200"
            image={image}
        />}
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {bio}
        </Typography>
        </CardContent>
    </Card>
);