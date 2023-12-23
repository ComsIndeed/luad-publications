interface PostDocument {
  id: string;
  title: string;
  headerImage: string;
  isLargeCard?: boolean;
  author?: string;
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
          passedDocument.title;
      }

      if (newClone.querySelector(".ContentCard-headerImage")) {
        newClone
          .querySelector(".ContentCard-headerImage")!
          .setAttribute("src", passedDocument.headerImage);

        newClone
          .querySelector(".ContentCard-headerImage")!
          .setAttribute(
            "alt",
            `Thumbnail for the article: ${
              passedDocument.title
                ? passedDocument.title
                : "Document Title not found"
            } `
          );
      }

      return newClone;
    }
  );
  return hydratedCollection;
}
