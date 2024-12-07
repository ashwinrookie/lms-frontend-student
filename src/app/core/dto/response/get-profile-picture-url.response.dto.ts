interface FieldObject {
  [key: string]: string; // Key-value pairs where both key and value are strings
}
interface GetProfilePictureURLResponseDTO {
  url: string;
  fields: FieldObject;
}

export { GetProfilePictureURLResponseDTO };
