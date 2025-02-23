import { css } from "@emotion/css";

interface DragDropPhotoProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export function DragDropPhoto(props: DragDropPhotoProps) {
  const { setSelectedImage } = props;
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag-and-drop functionality
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className={styles.dragDrop}
    >
      <p>Drag and drop to Put. a photo here, or click to select one</p>

      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        style={{ display: "none" }}
        id='fileInput'
      />
      <label htmlFor='fileInput' className={styles.label}>
        Please Put. Photo
      </label>
      <p>(Supports JPEG, PNG, GIF, BMP, and WebP)</p>
    </div>
  );
}

const styles = {
  label: css({
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  }),
  dragDrop: css({
    width: "98%",
    height: "400px",
    border: "2px dashed #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    margin: "20px",
  }),
};
