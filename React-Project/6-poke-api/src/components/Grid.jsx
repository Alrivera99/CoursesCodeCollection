import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import axios from "axios";
const Grid = ({ nombre }) => {
  const [pokemon, setPokemon] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [color, setColor] = useState("");
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then((response) => {
        setPokemon(response.data.sprites.other.dream_world.front_default);
        setTipo(response.data.types);

      });
  }, [nombre]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 500, height: 450 }}
          cover={<img alt={`${nombre}-img`} src={pokemon} />}
        >
          <h1 className="texto">{nombre} </h1>
          <Row>
            {tipo.map((value) => (
              <Col span={12}>
                <span
                  className="span-type"
                  style={{
                    background:
                      value.type.name == "fire"
                        ? "#f28f3e"
                        : value.type.name == "water"
                        ? "#338bd1"
                        : value.type.name == "bug"
                        ? "#7cb900"
                        : value.type.name == "grass"
                        ? "#35b547"
                        : value.type.name == "flying"
                        ? "#82a1d7"
                        : value.type.name == "normal"
                        ? "#8a929a"
                        : value.type.name == "fighting"
                        ? "#d52e65"
                        : value.type.name == "poison"
                        ? "#ac62c3"
                        : value.type.name == "rock"
                        ? "#bead7f"
                        : value.type.name == "ground"
                        ? "#dc6c33"
                        : value.type.name == "psychic"
                        ? "#f2616f"
                        : value.type.name == "ghost"
                        ? "#4865a9"
                        : value.type.name == "dragon"
                        ? "#0069bf"
                        : value.type.name == "electric"
                        ? "#eec600"
                        : value.type.name == "fairy"
                        ? "#ee82df"
                        : value.type.name == "dark"
                        ? "#565061"
                        : value.type.name == "steel"
                        ? "#55879a"
                        : "#48c6b6",
                  }}
                >
                  {value.type.name}
                </span>
              </Col>
            ))}
          </Row>
          <Button className="button-info" onClick={showModal}>
            <InfoCircleOutlined /> Ver informacion
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            width={1000}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Card>
      </Col>
    </>
  );
};

export default Grid;
