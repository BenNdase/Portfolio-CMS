import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  const { loading = false } = props;

  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          loading && (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading && (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          )
        }
        subheader={
          loading && <Skeleton animation="wave" height={10} width="40%" />
        }
      />
      {loading && (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      )}

      <CardContent>
        {loading && (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        )}
      </CardContent>
      <CardContent>
        {loading && (
          <React.Fragment>
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonFacebook() {
  return (
    <div>
      <Media loading />
    </div>
  );
}
