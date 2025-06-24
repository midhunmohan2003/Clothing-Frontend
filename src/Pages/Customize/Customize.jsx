import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Customize = ({ productImage }) => {
  const [texts, setTexts] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageSize, setImageSize] = useState(150);
  const [shapes, setShapes] = useState([]);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [shapeType, setShapeType] = useState("square");

  // Clear any existing customizations when component mounts
  useEffect(() => {
    // Clear all states
    setTexts([]);
    setCurrentText("");
    setSelectedTextId(null);
    setUploadedImage(null);
    setImageSize(150);
    setShapes([]);
    setSelectedShapeId(null);
    setShapeType("square");
  }, []);

  const handleAddText = () => {
    if (currentText.trim() === "") return;
    const newText = {
      id: Date.now(),
      content: currentText,
      top: 100,
      left: 100,
      fontSize: 24,
      color: "#000000",
      fontFamily: "Arial",
    };
    setTexts([...texts, newText]);
    setCurrentText("");
    setSelectedTextId(newText.id);
    setSelectedShapeId(null);
  };

  const updateText = (key, value) => {
    setTexts((prev) =>
      prev.map((text) =>
        text.id === selectedTextId ? { ...text, [key]: value } : text
      )
    );
  };

  const deleteText = () => {
    setTexts((prev) => prev.filter((text) => text.id !== selectedTextId));
    setSelectedTextId(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const deleteImage = () => {
    setUploadedImage(null);
  };

  const handleAddShape = () => {
    const newShape = {
      id: Date.now(),
      type: shapeType,
      top: 100,
      left: 100,
      size: 100,
      color: "#ff0000",
    };
    setShapes([...shapes, newShape]);
    setSelectedShapeId(newShape.id);
    setSelectedTextId(null);
  };

  const updateShape = (key, value) => {
    setShapes((prev) =>
      prev.map((shape) =>
        shape.id === selectedShapeId ? { ...shape, [key]: value } : shape
      )
    );
  };

  const deleteShape = () => {
    setShapes((prev) => prev.filter((s) => s.id !== selectedShapeId));
    setSelectedShapeId(null);
  };

  const handleSave = () => {
    const designData = {
      texts,
      uploadedImage,
      imageSize,
      shapes,
      productImage,
    };
    localStorage.setItem("customDesign", JSON.stringify(designData));
    alert("Design saved successfully!");
  };

  const selectedText = texts.find((t) => t.id === selectedTextId);
  const selectedShape = shapes.find((s) => s.id === selectedShapeId);

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.pageHeader}>🎨 Customize Your Product</h2>
      <div style={styles.layoutContainer}>
        {/* Left Sidebar - Controls */}
        <div style={styles.sidebar}>
          {/* Text Section */}
          <div style={styles.section}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <i className="fa-solid fa-font" style={{ color: "#deeppink" }}></i>
              <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#333" }}>Text</h3>
            </div>
            {!selectedTextId ? (
              <>
                <input
                  type="text"
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Enter your text"
                  style={styles.input}
                />
                <button onClick={handleAddText} style={styles.button}>
                  Add Text
                </button>
              </>
            ) : (
              <>
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={styles.label}>Content</label>
                  <input
                    type="text"
                    value={selectedText.content}
                    onChange={(e) => updateText("content", e.target.value)}
                    style={styles.input}
                  />
                </div>
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={styles.label}>Font Size: {selectedText.fontSize}px</label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={selectedText.fontSize}
                    onChange={(e) => updateText("fontSize", Number(e.target.value))}
                    style={styles.slider}
                  />
                </div>
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={styles.label}>Color</label>
                  <input
                    type="color"
                    value={selectedText.color}
                    onChange={(e) => updateText("color", e.target.value)}
                    style={styles.colorPicker}
                  />
                </div>
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={styles.label}>Font</label>
                  <select
                    value={selectedText.fontFamily}
                    onChange={(e) => updateText("fontFamily", e.target.value)}
                    style={styles.select}
                  >
                    <option>Arial</option>
                    <option>Verdana</option>
                    <option>Georgia</option>
                    <option>Courier New</option>
                    <option>Comic Sans MS</option>
                  </select>
                </div>
                <button onClick={deleteText} style={styles.deleteButton}>
                  Delete Text
                </button>
              </>
            )}
          </div>

          {/* Image Section */}
          <div style={styles.section}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <i className="fa-solid fa-image" style={{ color: "#deeppink" }}></i>
              <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#333" }}>Image</h3>
            </div>
            {!uploadedImage ? (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={styles.fileInput}
              />
            ) : (
              <>
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={styles.label}>Size: {imageSize}px</label>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    value={imageSize}
                    onChange={(e) => setImageSize(Number(e.target.value))}
                    style={styles.slider}
                  />
                </div>
                <button onClick={deleteImage} style={styles.deleteButton}>
                  Delete Image
                </button>
              </>
            )}
          </div>

          {/* Shape Section */}
          <div style={styles.section}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <i className="fa-solid fa-shapes" style={{ color: "#deeppink" }}></i>
              <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#333" }}>Shape</h3>
            </div>
            {!selectedShapeId ? (
              <>
                <select
                  value={shapeType}
                  onChange={(e) => setShapeType(e.target.value)}
                  style={styles.select}
                >
                  <option value="square">Square</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="triangle">Triangle</option>
                </select>
                <button onClick={handleAddShape} style={styles.button}>
                  Add Shape
                </button>
              </>
            ) : (
              <>
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={styles.label}>Size: {selectedShape.size}px</label>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    value={selectedShape.size}
                    onChange={(e) => updateShape("size", Number(e.target.value))}
                    style={styles.slider}
                  />
                </div>
                <div style={{ marginBottom: "0.75rem" }}>
                  <label style={styles.label}>Color</label>
                  <input
                    type="color"
                    value={selectedShape.color}
                    onChange={(e) => updateShape("color", e.target.value)}
                    style={styles.colorPicker}
                  />
                </div>
                <button onClick={deleteShape} style={styles.deleteButton}>
                  Delete Shape
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right Panel - Product Preview */}
        <div style={styles.rightPanel}>
          <div
            style={{
              ...styles.shirtContainer,
              backgroundImage: productImage ? `url(${productImage})` : "none",
              backgroundColor: "transparent",
            }}
          >
            {uploadedImage && (
              <motion.img
                drag
                src={uploadedImage}
                alt="Uploaded Design"
                style={{
                  position: "absolute",
                  top: "150px",
                  left: "50px",
                  width: imageSize,
                  height: imageSize,
                  objectFit: "contain",
                  cursor: "move",
                  zIndex: 3,
                }}
              />
            )}

            {texts.map((text) => (
              <motion.div
                drag
                key={text.id}
                onClick={() => {
                  setSelectedTextId(text.id);
                  setSelectedShapeId(null);
                }}
                style={{
                  position: "absolute",
                  top: text.top,
                  left: text.left,
                  fontSize: text.fontSize,
                  color: text.color,
                  fontFamily: text.fontFamily,
                  fontWeight: "bold",
                  cursor: "move",
                  userSelect: "none",
                  zIndex: 2,
                }}
              >
                {text.content}
              </motion.div>
            ))}

            {shapes.map((shape) => {
              const shapeStyles = {
                position: "absolute",
                top: shape.top,
                left: shape.left,
                width:
                  shape.type === "rectangle" ? shape.size + 40 : shape.size,
                height: shape.size,
                backgroundColor:
                  shape.type === "triangle" ? "transparent" : shape.color,
                cursor: "move",
                userSelect: "none",
              };

              if (shape.type === "triangle") {
                shapeStyles.width = 0;
                shapeStyles.height = 0;
                shapeStyles.borderLeft = `${
                  shape.size / 2
                }px solid transparent`;
                shapeStyles.borderRight = `${
                  shape.size / 2
                }px solid transparent`;
                shapeStyles.borderBottom = `${shape.size}px solid ${shape.color}`;
              }

              return (
                <motion.div
                  drag
                  key={shape.id}
                  onClick={() => {
                    setSelectedShapeId(shape.id);
                    setSelectedTextId(null);
                  }}
                  style={{
                    ...shapeStyles,
                    zIndex: 1,
                  }}
                />
              );
            })}
          </div>

          <div style={styles.actionButtons}>
            <button onClick={handleSave} style={styles.saveButton}>
              💾 Save Design
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("customDesign");
                setTexts([]);
                setShapes([]);
                setUploadedImage(null);
                setSelectedTextId(null);
                setSelectedShapeId(null);
                alert("Design reset!");
              }}
              style={styles.deleteButton}
            >
              🔄 Reset Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  pageHeader: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#333",
  },
  layoutContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  sidebar: {
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "6px",
    color: "#555",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  slider: {
    width: "100%",
  },
  colorPicker: {
    width: "50px",
    height: "40px",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "deeppink",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  deleteButton: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  fileInput: {
    marginTop: "6px",
  },
  shirtContainer: {
    width: "500px",
    height: "500px",
    position: "relative",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  saveButton: {
    padding: "12px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid #deeppink",
  },
  buttonGroup: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  propertyGroup: {
    marginBottom: "1rem",
  },
  actionButtons: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
  },
};

export default Customize;
