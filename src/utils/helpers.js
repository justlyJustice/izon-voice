import moment from "moment";

export function formateTime(time) {
  return moment(time).fromNow();
}

export const splitDesc = (post) => {
  if (post && post.desc) {
    const array = post.desc.split("\n");

    const middleIndex = Math.ceil(array.length / 2);

    const firstHalf = array.splice(0, middleIndex);
    const secondHalf = array.splice(-middleIndex);

    let obj = { firstHalf, secondHalf };

    let objectKeys = Object.keys(obj);

    return objectKeys.map((i) => obj[i]);
  }

  return null;
};

export const splitDescription = (post) => {
  if (post && post.description) {
    const array = post.description.split("\n");

    const middleIndex = Math.ceil(array.length / 2);

    const firstHalf = array.splice(0, middleIndex);
    const secondHalf = array.splice(-middleIndex);

    let obj = { firstHalf, secondHalf };

    let objectKeys = Object.keys(obj);

    return objectKeys.map((i) => obj[i]);
  }

  return null;
};

export const splitDescToFour = (post) => {
  if (post && post.desc) {
    const array = post.desc.split("\n");

    const fourPartIndex = Math.ceil(array.length / 4);

    const fourthPart = array.splice(-fourPartIndex);
    const thirdPart = array.splice(-fourPartIndex);
    const secondHalf = array.splice(-fourPartIndex);
    const firstHalf = array;

    let obj = { firstHalf, secondHalf, thirdPart, fourthPart };

    let objectKeys = Object.keys(obj);

    return objectKeys.map((i) => obj[i]);
  }

  return null;
};

export const splitDescriptionToFour = (post) => {
  if (post && post.description) {
    const array = post.description.split("\n");

    const fourPartIndex = Math.ceil(array.length / 4);

    const fourthPart = array.splice(-fourPartIndex);
    const thirdPart = array.splice(-fourPartIndex);
    const secondHalf = array.splice(-fourPartIndex);
    const firstHalf = array;

    let obj = { firstHalf, secondHalf, thirdPart, fourthPart };

    let objectKeys = Object.keys(obj);

    return objectKeys.map((i) => obj[i]);
  }

  return null;
};
