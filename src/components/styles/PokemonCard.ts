import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
  background-color: white;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  background-color: #ecd018;
  text-align: center;
  padding: 10px;
`;

export const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
  text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
`;

export const BasicStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const Meta = styled.span`
  color: white;
  text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4);
  background-color: #7bb7b7;
  font-weight: bold;
  margin: 0;
  padding: 5px 20px;
  border-radius: 5px;

  @media (max-width: 400px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const Preview = styled.div`
  flex-grow: 1;
  padding: 20px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const SkillList = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const Skill = styled.span`
  flex-grow: 1;
  background-color: #f16820;
  border-radius: 3px;
  margin: 0 8px 10px;
  padding: 7px;
  font-weight: 700;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  word-wrap: break-down;
  text-align: center;

  @media (max-width: 400px) {
    width: 100%;
  }
`;
