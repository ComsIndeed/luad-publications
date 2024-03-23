interface PostDocument {
  id: string;
  head: {
    title: string,
    author: string
    headerImage: {
      large: string
      medium: string
      small: string
      tiny: string
      largeFullPath: string
      mediumFullPath: string
      smallFullPath: string
      tinyFullPath: string
    }
  }
}

// Takes in the template and the data to hydrate it with,
// then returns the hydrated collection to be appended into a container
// Here is the Element Structure:
//   - #ContentCardTemplate: <template>
//     - .ContentCard: <a>
//       - .ContentCard-headerImage: <img>
//       - .ContentCard-headerText: <h2>
export function getHydratedCollection(
  templateID: string,
  data: PostDocument[]
) {
  const Template: HTMLTemplateElement = document.getElementById(
    templateID
  ) as HTMLTemplateElement;

  if (!Template) {
    throw new Error(`Template with ID "${templateID}" not found.`);
  }

  const hydratedCollection: HTMLElement[] = data.map(
    (passedDocument: PostDocument) => {
      let newClone: HTMLElement = Template.content.cloneNode(
        true
      ) as HTMLElement;

      if (newClone.querySelector(".ContentCard")) {
        newClone
          .querySelector(".ContentCard")!
          .setAttribute("href", `/document?id=${passedDocument.id}`);
      }

      if (newClone.querySelector(".ContentCard-headerText")) {
        newClone.querySelector(".ContentCard-headerText")!.textContent =
          passedDocument?.head?.title;
      }

      if (newClone.querySelector(".ContentCard-headerImage")) {
        newClone
          .querySelector(".ContentCard-headerImage")!
          .setAttribute("src", passed document?.head?.headerImage?.small);

        newClone
          .querySelector(".ContentCard-headerImage")!
          .setAttribute(
            "alt",
            `Thumbnail for the article: ${
              passedDocument?.head?.title
                ? passedDocument?.head?.title
                : "Document Title not found"
            } `
          );
      }

      return newClone;
    }
  );
  return hydratedCollection;
}
