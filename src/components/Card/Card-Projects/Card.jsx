import * as React from "react";
import "./Card.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Icon } from "@iconify/react";
import { Link } from "@mui/material";

export default function RecipeReviewCard({
  avatar,
  image,
  title,
  technologies,
  link,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-project">
      <CardHeader
        avatar={
          <Avatar className="avatar" aria-label="recipe">
            <img src={avatar} alt={`Logo ${title}`} />
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="actions">
        <div>
          {technologies.map((technology, index) => (
            <IconButton key={index} aria-label="add to favorites">
              <Icon icon={technology.icon} color="#525151" />
            </IconButton>
          ))}
        </div>
        <div>
          <Link href={link} target="_blank">
            <Icon icon="ci:external-link" color="#525151" width="27" />
          </Link>
        </div>
      </CardActions>
    </Card>
  );
}
