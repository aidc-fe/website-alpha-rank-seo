// 处理get请求
export const handleGet = (url: string, params: { [key: string]: string }) => {
  const SearchParams = new URLSearchParams(params);

  return fetch(`${url}?${SearchParams.toString()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

// 处理POST请求
export const handlePost = (url: string, data: { [key: string]: string }) => {
  return fetch(url, { method: "POST", body: JSON.stringify(data) })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

// 将接口返回数据保存为某个文件
export const saveDataToFile = (data: any, fPath: string) => {
  fetch("/api/utils/save-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data, fPath }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData.message);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
};
