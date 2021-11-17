import { createContext, useContext, useState } from "react";
import { useToast } from "@chakra-ui/toast";

const AddRecipeContext = createContext();

export const AddRecipeProvider = ({ children }) => {
  const [recipeBody, setRecipeBody] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [item, setItem] = useState("");
  const toast = useToast();

  const addToArray = (array, setArray, item) => {
    if (item) {
      if (!array.includes(item)) {
        setArray([...array, item]);
      } else {
        toast({
          title: "Item já adicionado!",
          description: "Adicione um item diferente",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      }
    } else {
      toast({
        title: "É preciso adicionar um item!",
        description: "Escreva o nome do item para adicioná-lo",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const removeFromArray = (array, setArray, item) => {
    const filteredArray = array.filter((instruc) => instruc !== item);
    if (array === ingredients) {
      localStorage.setItem(
        "@cookin:ingredients",
        JSON.stringify(filteredArray)
      );
    } else {
      localStorage.setItem(
        "@cookin:instructions",
        JSON.stringify(filteredArray)
      );
    }
    setArray(filteredArray);
    toast({
      title: "Item excluído",
      description: `Item ${item} excluído da lista`,
      status: "warning",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <AddRecipeContext.Provider
      value={{
        recipeBody,
        setRecipeBody,
        addToArray,
        removeFromArray,
        ingredients,
        setIngredients,
        instructions,
        setInstructions,
        item,
        setItem,
      }}
    >
      {children}
    </AddRecipeContext.Provider>
  );
};

export const useAddRecipe = () => {
  return useContext(AddRecipeContext);
};
