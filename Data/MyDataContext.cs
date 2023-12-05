using ServerReact.Models;

namespace ServerReact.Data
{
    public class MyDataContext
    {
        public List<PostModel> Posts { get; set; }

        public MyDataContext() 
        { 
            Posts = new List<PostModel>(); // пост по умолчанию равен пустому посту
        }
    }
}
