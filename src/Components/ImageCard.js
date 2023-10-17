import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ImageCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto -mt-20 max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((image) => (
              <div
                key={image.id}
                className="group relative border rounded-lg p-3"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={image.urls.regular}
                    alt={image.alt_description}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    onClick={() => handleOpen(image)}
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <img
                      className="h-8 w-8 rounded-full border border-1 border-black border-solid"
                      src={image.user.profile_image.small}
                      alt=""
                    />
                    <h3 className="text-sm text-gray-700">{image.user.name}</h3>
                    <h3 className="text-sm text-gray-700">
                      @{image.user.instagram_username}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    <img
                      src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1853251.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5Nzc2MDAwMCwicSI6bnVsbCwiaWF0IjoxNjk3NTI3MzI5fQ__.178561ed00c7417a457c9cbce1fe14a09e299d433f35f6d692acf8c23b9d3feb"
                      alt="like"
                      style={{ height: "20px", width: "20px" }}
                    />
                    {image.likes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedItem && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              src={selectedItem.urls.small}
              style={{ width: "100%", height: "400px", borderRadius: "10px" }}
              className="-mt-3"
              alt={selectedItem.alt_description}
            />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontFamily: "system-ui" }}
            >
              <div className="mt-8 flex justify-between">
                <div>
                  <img
                    className="h-8 w-8 rounded-full border border-1 border-black border-solid"
                    src={selectedItem.user.profile_image.small}
                    alt=""
                  />
                  <h3 className="text-sm text-gray-700">
                    {selectedItem.user.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  <img
                    src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1853251.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5Nzc2MDAwMCwicSI6bnVsbCwiaWF0IjoxNjk3NTI3MzI5fQ__.178561ed00c7417a457c9cbce1fe14a09e299d433f35f6d692acf8c23b9d3feb"
                    alt="like"
                    style={{ height: "20px", width: "20px" }}
                  />
                  {selectedItem.likes}
                </p>
              </div>
              <div className="mt-2 flex">
                <div className="flex flex-row">
                  <img
                    className="h-4 w-4"
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
                    alt=""
                  />
                  <h3 className="text-sm text-gray-700 ml-1 text-sm">
                    /{selectedItem.user.instagram_username}
                  </h3>
                </div>
              </div>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{ fontFamily: "system-ui" }}
            >
              {selectedItem.alt_description}
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ImageCard;
