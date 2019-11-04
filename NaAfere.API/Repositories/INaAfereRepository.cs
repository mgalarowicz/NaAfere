using System;
using System.Linq;
using System.Linq.Expressions;

namespace NaAfere.API.Repositories
{
    public interface INaAfereRepository<T>
    {
         void Create(T entity);

         void Delete(T entity);
         
         void Update(T entity);

        IQueryable<T> FindAll();

        IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression);

    }
}