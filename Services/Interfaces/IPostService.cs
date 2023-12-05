using Microsoft.AspNetCore.Mvc;
using ServerReact.Models;
using System.Reflection;

namespace ServerReact.Services.Interfaces
{
    public interface IPostService
    {

        PostModel Create(PostModel model); // возврашяется объект модели
        PostModel Update(PostModel model); // возврашяется объект изменённыой модели
        PostModel Get(int id); // возврашяет Post
        List<PostModel> Get(); // возврашяет весь список
        void Delete(int id); //  не чего не будет возврашять
        
    }
}
