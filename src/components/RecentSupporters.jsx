import React from "react";
import { Users, Coffee } from "lucide-react";

const RecentSupporters = ({ supporters }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Users className="w-6 h-6 text-secondary" />
        Recent Supporters
      </h3>

      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {supporters.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <Coffee className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No supporters yet. Be the first!</p>
          </div>
        ) : (
          supporters.map((supporter) => (
            <div
              key={supporter.id}
              className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-amber-700 rounded-full flex items-center justify-center text-white font-bold">
                    {supporter.name[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {supporter.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {supporter.timestamp}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-secondary">
                  <span className="text-lg">☕</span>
                  <span className="font-bold text-secondary">
                    x{supporter.amount}
                  </span>
                </div>
              </div>

              {supporter.message && (
                <p className="text-gray-700 mt-3 pl-12 italic">
                  "{supporter.message}"
                </p>
              )}
            </div>
          ))
        )}
      </div>

      {supporters.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 font-medium">Total Supporters:</span>
            <span className="font-bold text-secondary text-lg">
              {supporters.length}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="text-gray-600 font-medium">Total Coffees:</span>
            <span className="font-bold text-secondary text-lg">
              {supporters.reduce((sum, s) => sum + s.amount, 0)} ☕
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSupporters;
